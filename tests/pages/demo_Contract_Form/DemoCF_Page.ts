import { Locator, Page } from "@playwright/test";
import { ElementActions } from "../../../utils/ElmentAction";


export class DemoCF_Page {
    readonly page:Page;
    readonly url ="https://www.selenium.dev/selenium/web/web-form.html";
    readonly textInput:Locator;
    readonly passwordInput:Locator;
    readonly textArea:Locator;
    readonly dropdown:Locator;
    readonly datePicker:Locator;
    readonly defaultRadioButton:Locator;
    readonly defaultCheckBox:Locator;
    readonly day31Cell:Locator;
    readonly submitButton:Locator;
     public successMessage:Locator;
    constructor(page:Page){
        this.page=page;
        this.textInput = page.getByRole('textbox', { name: 'Text input' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.textArea = page.getByRole('textbox', { name: 'Textarea' })
        this.dropdown = page.getByLabel('Dropdown (select) Open this')
        this.datePicker = page.getByRole('textbox', { name: 'Date picker' })
        this.day31Cell = page.getByRole('cell', { name: '31' })
        this.defaultCheckBox = page.getByRole('checkbox', { name: 'Default checkbox' })
        this.defaultRadioButton = page.getByRole('radio', { name: 'Default radio' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.successMessage = page.getByRole('heading', { name: 'Form submitted' })
    }


    async goto(){
        await this.page.goto(this.url);
    }
    
    async filltextInput(text:string){
        await ElementActions.fill(this.textInput,text);
        return this;
    }
    async fillpasswordInput(text:string){
        await ElementActions.fill(this.passwordInput,text);
        return this;
    }
    async filltextArea(text:string){
        await ElementActions.fill(this.textArea,text);
        return this;
    }
    async selectdropdown(label:string){
        await ElementActions.selectOption(this.dropdown,label);
        return this;
    }
    async selectDate(text:string){
        await this.datePicker.click();
        await this.day31Cell.click();
        return this;
    }
    async selectCheckBox(){
        await ElementActions.check(this.defaultCheckBox);
        return this;
    }
    async selectRadioButton(){
        await ElementActions.check(this.defaultRadioButton);
        return this;
    }
    async submit(){
        await ElementActions.click(this.submitButton);
    }
}