export interface IAccount {
 accountId?: string;
 name: string;
}

export class AccountModel {
 static EntityName = "account";

 static Fields = {
  AccountId: "accountid",
  Name: "name",
 };

 static getFields(): string[] {
  //@ts-ignore
  return Object.values(AccountModel.Fields);
 }
}
