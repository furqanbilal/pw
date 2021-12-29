import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0;
  isLength=false;
  useLetters=false;
  useNumbers=false;
  useSymbols=false;
  password='';

  onChangeLength(element:any){
    const parsedValue=parseInt(element.target.value);

    if(parsedValue!=NaN){
      length=parsedValue;
    }

    if (length!=0)
      this.isLength=true;
    else
      this.isLength=false;
  }

  onChangeUseLetters(){
    this.useLetters =!this.useLetters;
  }

  onChangeUseNumbers(){
    this.useNumbers =!this.useNumbers;
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick(){
    const letters='abcdefghijklmnopqrstuvwxyz';
    const numbers='1234567890';
    const symbols='!@#$%^&*()_+';

    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    }

    if(this.useNumbers){
      validChars += numbers;
    }

    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword='';

    for (let i=0; i < length; i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

}
