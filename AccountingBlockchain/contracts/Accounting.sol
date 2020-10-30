pragma solidity ^0.6.9;

contract Accounting {
    string private message = "hello world";

    struct accountInfo {
        string accountType;
        string accountName;
        int256 value;
        uint256 code;
        string accountDescription;
        uint256 accountValueType;
    }

    struct inventoryInfo{
        string inventoryName;
        uint256 quantity;
        uint256 inventoryNumber;
        uint256 salesPrice;
        uint256 purchasePrice;
    }

    mapping(uint256 => accountInfo) accounts;
    uint256[] public accountIds;

    mapping(uint256 => inventoryInfo) inventories;
    uint256[] public inventoryIds;

    function registerAccount(string memory newAccountType, string memory newAccountName,
                            uint256 newCode, string memory newDescription, uint256 newAccountValueType) public {
        accountInfo storage newAccount = accounts[newCode];
        newAccount.accountType = newAccountType;
        newAccount.accountName = newAccountName;
        newAccount.code = newCode;
        newAccount.value = 0;
        newAccount.accountDescription = newDescription;
        newAccount.accountValueType = newAccountValueType;
        accountIds.push(newCode);  
    }

    function getAccountType(uint256 code) public view returns(string memory){
        accountInfo storage a = accounts[code];
        return (a.accountType);
    }

    function getAccountDescription(uint256 code) public view returns(string memory){
        accountInfo storage a = accounts[code];
        return (a.accountDescription);
    }

    function getAccountValue(uint256 code) public view returns(int256)
    {
        accountInfo storage a = accounts[code];
        return (a.value);
    }

    function changeAccountValue(uint256 code, int256 amount, uint256 drcr) public
    {
        accountInfo storage a = accounts[code];
        if(drcr == a.accountValueType)
        {
            a.value += amount;
        }
        else
        {
            a.value -= amount;
        }
    }

    function getAccountName(uint256 code) public view returns(string memory){
        accountInfo storage a = accounts[code];
        return (a.accountName);
    }

    function getAccounts() public view returns(uint256[] memory)
    {
        return accountIds;
    }

    function registerInventory(string memory newInventoryName, uint256 newQuantity, uint256 newInventoryNumber, 
                                uint256 newSalesPrice, uint256 newPurchasePrice) public {
        inventoryInfo storage newInventory = inventories[newInventoryNumber];
        newInventory.inventoryName = newInventoryName;
        newInventory.quantity = newQuantity;
        newInventory.inventoryNumber = newInventoryNumber;
        newInventory.salesPrice = newSalesPrice;
        newInventory.purchasePrice = newPurchasePrice;
        inventoryIds.push(newInventoryNumber); 
    }

    function updateInventory(uint256 code, uint256 newQuantity, uint newSalesPrice, uint newPurchasePrice) public {
        inventoryInfo storage a = inventories[code];
        a.quantity = newQuantity;
        a.salesPrice = newSalesPrice;
        a.purchasePrice = newPurchasePrice;
    }


    function getPurchasePrice(uint256 code) public view returns(uint256){
        inventoryInfo storage a = inventories[code];
        return (a.purchasePrice);
    }

    function getSalesPrice(uint256 code) public view returns(uint256){
        inventoryInfo storage a = inventories[code];
        return (a.salesPrice);
    }

    function getInventoryNumber(uint256 code) public view returns(uint256){
        inventoryInfo storage a = inventories[code];
        return (a.inventoryNumber);
    }

    function getInventoryQuantity(uint256 code) public view returns(uint256){
        inventoryInfo storage a = inventories[code];
        return (a.quantity);
    }

    function getInventoryName(uint256 code) public view returns(string memory){
        inventoryInfo storage a = inventories[code];
        return (a.inventoryName);
    }

    function getInventories() public view returns(uint256[] memory)
    {
        return inventoryIds;
    }

    function getMessage() public view returns(string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}

