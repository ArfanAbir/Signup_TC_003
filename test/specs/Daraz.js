describe("sign up daraz", () => {


    it('Daraz', async () => {
      await browser.url("https://www.daraz.com.bd/")
    });
    it('Sign Up', async () => {
        await $("div[id='anonLogin']").click()
    });

    it('Register Button',async () => {
        const link = await $('=Register')
        link.click()
    });

    it('phone number', async () => {
      const number =  await $("div[class='mod-input mod-login-input-phone mod-input-phone']")
      number.setValue("")
    });


    
    it('password', async () => {
        const password =  await $("div[class='mod-input mod-input-password mod-login-input-password mod-input-password']")
        password.setValue("abc123")
      });




      
    it('Month', async () => {
        const month =  await $("div[id='month']")
        month.setValue("January")
      });

      
      it('Day', async () => {
        const day =  await $("div[id='day']")
        day.setValue("10")
      });
      

      it('Year', async () => {
        const year =  await $("div[id='year']")
        year.setValue("2000")
      });

      

      it('Full Name', async () => {
        const fullName =  await $("div[class='mod-input mod-login-input-name mod-input-name']")
        fullName.setValue("Arfan Abir")
      });

    //   it('Uncheck', async () => {
    //     const uncheck =  await $("div[class='mod-login-receive']")
    //     uncheck.setValue("")
    //   });


      it('Submit Button', async () => {
        const submitButton =  await $("div[class='mod-login-btn']")
        submitButton.click()
      });
    
});