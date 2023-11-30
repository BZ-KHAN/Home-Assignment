// Import the inquirer module
import inquirer from 'inquirer';

console.log('\n*-*-*-*-*-*-*-*-*-*-*-*-*- Task #1 -*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log('\n*-*-*-*-*-*-*-*-*-*-*- Welcome To Our Supermarket -*-*-*-*-*-*-*-*-*-*-*')

while(true){ // Starting outer-while-loop

    console.log('\nWe have the following sections of groceries:')
    console.log("1. \"Fruits\" \n2. \"Vegetables\"")

    let option = await inquirer.prompt([{ // Choose main category options like fruits or vegetables
        type:'string',
        name:'chosenoption',
        message:'Enter the number of your choice:'
    }])
    if (option.chosenoption == 1){ // choose main-sub options like fruits or vegetables
        console.log('There are following items in your selected fruit category')
        console.log("1. Apple \tRs.150 per kg \n2. Mango \tRs.250 per kg \n3. Banana \tRs.180 per tozen")
        let sub_opt = await inquirer.prompt([{ // user entry for main-sub options
            type:'input',
            name:'sub_option',
            message:'Enter the number of your selected fruit:'
        }])
         
        if (sub_opt.sub_option == 1){ // choose sub-options like weight one or two or three kg 
            let disc_offer = 'Get 10% discount on purchases above Rs.500'
            console.log(disc_offer)
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter total weight of Apples you required in kgs:'
            }])
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let app_price = 150 * 1
                console.log('Your total amount of 1 kg apple is:',('Rs.' + app_price)) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let app_price = 150 * 2
                console.log('Your total amount of 2 kg apples are:',('Rs.' + app_price)) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let app_price = 150 * 3
                console.log('Your total amount of 3 kg apples are:',('Rs.' + app_price)) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price 
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let app_price = 150 * 4 
                console.log('Your total amount of 4 kg apples are:',('Rs.' + app_price)) // total amount 
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount)))
                }else{
                    
                }
            }
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }          
            
        }else if (sub_opt.sub_option == 2){ // choose sub-options like weight one or two or three kg 
            let disc_0_offer = 'Get 10% discount on purchases above Rs.600'
            console.log(disc_0_offer) 
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter total weight of Mangos you required in kgs:'
            }])
              
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let mango_price = 250 * 1
                console.log('Your total amount of 1 kg mango is:',('Rs.' + mango_price)) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of 2 kg 
                let mango_price = 250 * 2
                console.log('Your total amount of 2 kg mango is:',('Rs.' + mango_price)) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount)))
                }else{
                   
                }
            }else if (tot_weight.weight == 3){ // weight in case of 3 kg 
                let mango_price = 250 * 3
                console.log('Your total amount of 3 kg mango is:',('Rs.' + mango_price)) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of 3 kg 
                let mango_price = 200 * 4
                console.log('Your total amount of 4 kg mango is:',('Rs.' + mango_price)) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount)))
                }else{
                    
                }
            }
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }

        }else if (sub_opt.sub_option == 3){ // choose sub-options like weight one or two or three kg 
            let disc_1_offer = 'Get 10% discount on purchases above Rs.650'
            console.log(disc_1_offer)
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter how many dozen of Banana you require:'
            }])  
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let banana_price = 180 * 1
                console.log('Your total amount of 1 dozen banana is:',('Rs.' + banana_price)) // total amount
                if (banana_price > 650){
                    let discount = banana_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of 2 kg 
                let banana_price = 180 * 2
                console.log('Your total amount of 2 dozen banana is:',('Rs.' + banana_price)) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of 3 kg 
                let banana_price = 180 * 3
                console.log('Your total amount of 3 dozen banana is:',('Rs.' + banana_price)) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of 3 kg 
                let banana_price = 180 * 4
                console.log('Your total amount of 4 dozen banana is:',('Rs.' + banana_price)) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount)))
                }else{
                    
                }
    
            } 
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }      
        }
        else {
            console.log('Invalid Entry')
        }
    }
    else if (option.chosenoption == 2){ // choose main-sub options like apple or banana or mangos
        console.log('There are following items in your selected vegetable category')
        console.log("1. Carrot \tRs.100 per kg \n2. Lady-finger \tRs.150 per kg \n3. Potato \tRs.180 per kg")
        let sub_opt = await inquirer.prompt([{ // user entry for main-sub options
            type:'input',
            name:'sub_option',
            message:'Enter the number of your selected vegetable:'
        }])
        if (sub_opt.sub_option == 1){ // choose sub-options like weight one or two or three kg 
            let disc_2_offer = 'Get 10% discount on purchases above Rs.300'
            console.log(disc_2_offer)
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter total weight of Carrot you required in kgs:'
            }])
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let carr_price = 100 * 1
                console.log('Your total amount of 1 kg carrot is:',('Rs.' + carr_price)) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let carr_price = 100 * 2
                console.log('Your total amount of 2 kg carrot is:',('Rs.' + carr_price)) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let carr_price = 100 * 3
                console.log('Your total amount of 3 kg carrot is:',('Rs.' + carr_price)) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price 
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let carr_price = 100 * 4 
                console.log('Your total amount of 4 kg carrot is:',('Rs.' + carr_price)) // total amount 
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount)))
                }else{
                    
                }
            }
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }
            
        }else if (sub_opt.sub_option == 2){ // choose sub-options like weight one or two or three kg 
            let disc_3_offer = 'Get 10% discount on purchases above Rs.450'
            console.log(disc_3_offer)
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter total weight of Lady-finger you required in kgs:'
            }])
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let ladf_price = 150 * 1
                console.log('Your total amount of 1 kg lady-finger is:',('Rs.' + ladf_price)) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let ladf_price = 150 * 2
                console.log('Your total amount of 2 kg lady-finger is:',('Rs.' + ladf_price)) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let ladf_price = 150 * 3
                console.log('Your total amount of 3 kg lady-finger is:',('Rs.' + ladf_price)) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price 
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after discount, your actual amount is',('Rs.' + (ladf_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let ladf_price = 150 * 4 
                console.log('Your total amount of 4 kg lady-finger is:',('Rs.' + ladf_price)) // total amount 
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount)))
                }else{
                    
                }
            }
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }

        }else if (sub_opt.sub_option == 3){ // choose sub-options like weight one or two or three kg 
            let disc_4_offer = 'Get 10% discount on purchases above Rs.500'
            console.log(disc_4_offer)
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:'Enter total weight of Potato you required in kgs:'
            }])
            
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let pot_price = 180 * 1
                console.log('Your total amount of 1 kg potato is:',('Rs.' + pot_price)) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let pot_price = 180 * 2
                console.log('Your total amount of 2 kg potato is:',('Rs.' + pot_price)) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let pot_price = 180 * 3
                console.log('Your total amount of 3 kg potato is:',('Rs.' + pot_price)) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price 
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount)))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let pot_price = 180 * 4 
                console.log('Your total amount of 4 kg potato is:',('Rs.' + pot_price)) // total amount 
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log('You are given a discount of',('Rs.' + discount))
                    console.log('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount)))
                }else{
                    
                }
            }

            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:'Would you like to proceed checkout:Y/N?'
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log('We have following checkout options:')
                    console.log("1. Credit Card \n2. Debit Card \n3. Net Banking \n4. Cash On Delivery \n5. PayPal \n6. Cancel ")
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:'Please choose a preferred payment method from above and type their number here:'
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(`You've selected Credit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Credit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(`You've selected Debit Card as your preferred payment method.`);
                        console.log(`Please proceed to pay using your Debit Card.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(`You've selected Net Banking as your preferred payment method.`);
                        console.log(`Please proceed to pay using Net Banking.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(`You've selected Cash On Delivery as your preferred payment method.`);
                        console.log(`You've selected Cash On Delivery. Payment will be collected upon delivery.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(`You've selected PayPal as your preferred payment method.`);
                        console.log(`Please proceed to pay using PayPal.`)
                        console.log('Thanks for proceeding your payments!!')

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log('Checkout canceled. Thank you!')
                    

                    }
                    else{
                        console.log('Invalid checkout option.')
                        break
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){
                    break

                }
                else{
                    while(true){ // Start sub-inner-while-loop 
                        let loop_repeat = await inquirer.prompt([{
                            type:'input',
                            name:'correct_msg',
                            message:"Enter a valid text either 'Y' or 'N':"
                        }])
                        if (loop_repeat.correct_msg.toUpperCase() == 'Y' || loop_repeat.correct_msg.toLowerCase() == 'y'){
                            break // Break sub-inner-while-loop
                        }
                        else if(loop_repeat.correct_msg.toUpperCase() == 'N' || loop_repeat.correct_msg.toLowerCase() == 'n'){
                            break // // Break sub-inner-while-loop

                        }
                        else{
                            continue
                            
                        }

                    }
                }
                break;// Break inner-while-loop

            }

        }
        else{
            console.log('Invalid Entry')
        }

    }
    else{
        console.log('Invalid Entry')
    }
    let permit = await inquirer.prompt([{ // Permission required for shopping continue
        type:'input',
        name:'permitt',
        message:'Do you want to contiune shopping:Y/N?'
    }])
    if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){
        continue
    }
    else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') {
        break 
    }
    else {
        while(true){ // Sub-while-loop in case of invlid text entry

            let play = await inquirer.prompt([{
            type:'input',
            name:'msg',
            message:"Please enter a valid text either 'Y' or 'N':"
            }])
            console.log(play.msg)
            if (play.msg.toUpperCase()  == 'Y' || play.msg.toLowerCase()  == 'y'){
                break
            }
            else if (play.msg.toUpperCase()  == 'N' || play.msg.toLowerCase()  == 'n'){
                break
            }
            else{

            }

        } // Closing inner-while-loop
        
    }
    break; // Break Outer-while-loop

} // Ending Outer-while-loop
let endMessage = '+++++++++++++++ Thanks For Shopping Here! +++++++++++++++\n'
console.log(endMessage)