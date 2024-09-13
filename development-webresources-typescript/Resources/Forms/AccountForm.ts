import {AccountModel} from '../Entities/Account';

namespace AccountForm {
 export function onLoad(context: Xrm.Events.EventContext): void {
  const formContext = context.getFormContext();
  formContext.getAttribute(AccountModel.Fields.Name).setValue("Default Account Name");
 }

 export function onSave(context: Xrm.Events.EventContext): void {
  const formContext = context.getFormContext();
  const name = formContext.getAttribute(AccountModel.Fields.Name).getValue();
  if (!name) {
   //@ts-ignore
   context.getEventArgs().preventDefault();
   alert("Account Name is required.");
  }
 }
}

// Expose functions to the global scope for Dynamics 365 to call
(window as any) = AccountForm;
