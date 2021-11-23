class Validation {
constructor(){
    this.form = document.querySelector('#member');
    this.btnSubmit = this.form.querySelector('input[type=submit]');
    
    this.btnSubmit.addEventListener('click', e=>{
    if(!this.isTxt('userid', 5))e.preventDefault();
    if(!this.isEmail('email'))e.preventDefault();    
    if(!this.isCheck('gender'))e.preventDefault();    
    if(!this.isCheck('hobby'))e.preventDefault();    
    if(!this.isTxt('comments', 20))e.preventDefault();
    if(!this.isSelect('edu'))e.preventDefault();
    if(!this.isPwd('pwd1','pwd2'))e.preventDefault();
})
}
        

 isTxt(name,len){
    
    if(len === undefined)len=5;
    var input = document.querySelector(`[name=${name}]`);
    var txt = input.value;

    if(txt !='' && txt.length >= len){

        var errMsgs = input.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0 )input.closest('td').querySelector('p').remove();
        return true;
    }else{
        var errMsgs = input.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0 )input.closest('td').querySelector('p').remove();
        var errMsg = document.createElement('p');
        errMsg.append(`${len}자 이상 텍스트를 입력해주세요.`)
        input.closest('td').append(errMsg);
        return false;
    }

}

 isEmail(name){

    var input = this.form.querySelector(`[name=${name}]`);
    var txt = input.value;

    if(txt > 0 && /@/.test(txt)){
        
        var errMsgs = input.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0)input.closest('td').querySelector('p').remove(); 
        return true;
    }else{
        var errMsgs = input.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0)input.closest('td').querySelector('p').remove();
        var errMsg = document.createElement('p');
        errMsg.append(`이메일 주소를 입력해주세요.`)
        input.closest('td').append(errMsg);
        return false;
    }
}

 isCheck(name){
    var inputs = this.form.querySelectorAll(`[name=${name}]`);
    var isChecked = false;

    for(let input of inputs){
        if(input.checked) isChecked = true;
    }
        if(isChecked){

            var errMsgs = inputs[0].closest('td').querySelectorAll('p');
            if(errMsgs.length >0 ) inputs[0].closest('td').querySelector('p').remove();

            return true;

        }else{
            var errMsgs = inputs[0].closest('td').querySelectorAll('p');
            if(errMsgs.length >0 ) inputs[0].closest('td').querySelector('p').remove();
            var errMsg = document.createElement('p');
            errMsg.append('체크 해주세요.');
            inputs[0].closest('td').append(errMsg);

            return false;
        }
   
}

 isSelect(name){
    var sel = this.form.querySelector(`[name=${name}]`);
    var val = sel.value;

    if(val !== ''){
        var errMsgs = sel.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0 )sel.closest('td').querySelector('p').remove();

        return true;
    }else{
        var errMsgs = sel.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0 )sel.closest('td').querySelector('p').remove();

        var errMsg = document.createElement('p');
        errMsg.append('학력을 선택해');
        sel.closest('td').append(errMsg)
        return false;
    }

}

 isPwd(name1,name2){
    var pwd1 = this.form.querySelector(`[name=${name1}]`)
    var pwd2 = this.form.querySelector(`[name=${name2}]`)

    var val1 = pwd1.value;
    var val2 = pwd2.value;

    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc=/[~!@#$%^&*()_+]/;
    if(val1 === val2 && val1.length >= 10 && eng.test(pwd1_val)&& num.test(pwd1_val)&& spc.test(pwd1_val)){
        
        var errMsgs1 = pwd1.closest('td').querySelectorAll('p');
        if(errMsgs1.length > 0 )pwd1.closest('td').querySelector('p').remove();
        
        var errMsgs2 = pwd2.closest('td').querySelectorAll('p');
        if(errMsgs2.length > 0 )pwd2.closest('td').querySelector('p').remove();

        return true;
    }else{
        var errMsgs1 = pwd1.closest('td').querySelectorAll('p');
        if(errMsgs1.length > 0 )pwd1.closest('td').querySelector('p').remove();
        
        var errMsgs2 = pwd2.closest('td').querySelectorAll('p');
        if(errMsgs2.length > 0 )pwd2.closest('td').querySelector('p').remove();

        var errMsg = document.createElement('p');
        errMsg.append('10자 이상 비번입력해줘');
        pwd1.closest('td').append(errMsg);

        
        var errMsg = document.createElement('p');
        errMsg.append('비번 동일하게');
        pwd2.closest('td').append(errMsg);

        return false;
    }
}
}

