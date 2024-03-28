public with sharing class productService {
    public static List<Account> getRecords(){
        try {
            List<Account> lstProducts = [
                SELECT
                Name,
                AccountNumber FROM Account
            ];
            return lstProducts;
            
        } catch (Exception e) {
            throw e;
        }
    }
}