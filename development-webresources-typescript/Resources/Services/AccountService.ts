import {AccountModel, IAccount} from "../Entities/Account";

export class AccountService {
 static async createAccount(account: IAccount): Promise<Xrm.Async.PromiseLike<string>> {
  const entity = {
   name: account.name,
  };

  return Xrm.WebApi.createRecord(AccountModel.EntityName, entity)
   .then((result) => {
    console.log("Account created with ID: ", result.id);
    return result.id;
   })
   .catch((error) => {
    console.error("Error creating account: ", error.message);
    throw error;
   });
 }

 static async getAccountById(accountId: string): Promise<IAccount> {
  const query = `${AccountModel.EntityName}(${accountId})?$select=${AccountModel.getFields().join(",")}`;

  return Xrm.WebApi.retrieveRecord(AccountModel.EntityName, accountId, query)
   .then((response) => response as IAccount)
   .catch((error) => {
    console.error("Error retrieving account: ", error.message);
    throw error;
   });
 }
}
