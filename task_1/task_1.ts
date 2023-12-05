// Import the inquirer module
import inquirer from 'inquirer';
import chalk from 'chalk'

console.log(chalk.greenBright('\n*-*-*-*-*-*-*-*-*-*-*-*-*- Task #1 -*-*-*-*-*-*-*-*-*-*-*-*-*'))
console.log(chalk.greenBright('\n*-*-*-*-*-*-*-*-*-*-*- Welcome To Our Supermarket -*-*-*-*-*-*-*-*-*-*-*'))

while(true){ // Starting outer-while-loop
    console.log(chalk.magentaBright('\nWe have the following sections of groceries:'))
    console.log(chalk.blueBright("1. \"Fruits\"") + chalk.greenBright("\n2. \"Vegetables\""))
    let option = await inquirer.prompt([{ // Choose main category options like fruits or vegetables
        type:'string',
        name:'chosenoption',
        message:chalk.yellowBright('Enter the number of your choice: either 1 or 2?:')
    }])
    while(true){ // Starting while-loop in case of empty input
        if (option.chosenoption.trim() == ''){
            console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
            option = await inquirer.prompt([{ // Ask for input again
                type:'string',
                name:'chosenoption',
                message:chalk.yellowBright('Enter the number of your choice: either 1 or 2?:')
            }])
        }
        else{// Break the loop if the input is not empty 
            break
        }
    } // Ending while-loop in case of empty input
    
    if (option.chosenoption == 1){ // starting choose main-sub options like fruits or vegetables
        console.log(chalk.greenBright('There are following items in your selected fruit category'))
        console.log(chalk.blueBright("1. Apple \tRs.150 per kg") + chalk.greenBright ("\n2. Mango \tRs.250 per kg") + chalk.magentaBright ("\n3. Banana \tRs.180 per dozen"))
        let sub_opt = await inquirer.prompt([{ // user entry for main-sub options
            type:'input',
            name:'sub_option',
            message:chalk.yellowBright('Enter the number of your selected fruit item: either 1 or 2 or 3?:')
        }])
        while(true){ // Starting while-loop in case of empty input
            if (sub_opt.sub_option.trim() == ''){
                console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                sub_opt = await inquirer.prompt([{ // Ask for input again
                    type:'input',
                    name:'sub_option',
                    message:chalk.yellowBright('Enter the number of your selected fruit item: either 1 or 2 or 3?:')
                }])
            }
            else{// Break the loop if the input is not empty 
                break
            }
        } // Ending while-loop in case of empty input

         
        if (sub_opt.sub_option == 1){ // starting choose sub-options like weight one or two or three kg 
            let disc_offer = 'Get 10% discount on purchases above Rs.500'
            console.log(chalk.greenBright(disc_offer))
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellowBright('Enter total weight of Apples you required in kgs (1kg - 4kg):')
            }])
            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter total weight of Apples you required in kgs (1kg - 4kg):')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input
            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let app_price = 150 * 1
                console.log(chalk.greenBright('Your total amount of 1 kg apple is:',('Rs.' + app_price))) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let app_price = 150 * 2
                console.log(chalk.greenBright('Your total amount of 2 kg apples are:',('Rs.' + app_price))) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let app_price = 150 * 3
                console.log(chalk.greenBright('Your total amount of 3 kg apples are:',('Rs.' + app_price))) // total amount
                if (app_price > 500){
                    let discount = app_price / 10 // discount price 
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount))))
                }else{
                
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let app_price = 150 * 4 
                console.log(chalk.greenBright('Your total amount of 4 kg apples are:',('Rs.' + app_price))) // total amount 
                if (app_price > 500){
                    let discount = app_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (app_price - discount))))
                }else{
                    
                }
            }else{
                console.log(chalk.redBright('Invalid choice'))

                let permit = await inquirer.prompt([{ // Permission required for shopping continue
                    type:'input',
                    name:'permitt',
                    message:chalk.yellowBright('Do you want to contiune shopping:Y/N?')
                }])
                if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
                    continue
                }
                else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
                        
                    break 
                }
                
            }
           
            while(true){ // Start inner-while-loop
                let check_opt = await inquirer.prompt([{ // Checkout options
                    type:'input',
                    name:'checkOut',
                    message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
                }])
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    }
                    else{ // Invalid checkout option
                        console.log(chalk.redBright('Invalid checkout option.'))
                        
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
            
                }

            } // close inner while loop 
            
        } // Ending choose sub-options like weight one or two or three kg 

        else if (sub_opt.sub_option == 2){ // starting choose sub-options like weight one or two or three kg 
            let disc_0_offer = 'Get 10% discount on purchases above Rs.600'
            console.log(chalk.greenBright(disc_0_offer)) 
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellowBright('Enter total weight of Mangos you required in kgs (1kg - 4kg):')
            }])

            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter total weight of Mangos you required in kgs:(1kg - 4kg)')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input  

            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let mango_price = 250 * 1
                console.log(chalk.greenBright('Your total amount of 1 kg mango is:',('Rs.' + mango_price))) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of 2 kg 
                let mango_price = 250 * 2
                console.log(chalk.greenBright('Your total amount of 2 kg mango is:',('Rs.' + mango_price))) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount))))
                }else{
                   
                }
            }else if (tot_weight.weight == 3){ // weight in case of 3 kg 
                let mango_price = 250 * 3
                console.log(chalk.greenBright('Your total amount of 3 kg mango is:',('Rs.' + mango_price))) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of 3 kg 
                let mango_price = 200 * 4
                console.log(chalk.greenBright('Your total amount of 4 kg mango is:',('Rs.' + mango_price))) // total amount
                if (mango_price > 600){
                    let discount = mango_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (mango_price - discount))))
                }else{
                    
                }
            }
            while(true){ // Start inner-while-loop
                let check_opt = await inquirer.prompt([{ // Checkout options
                    type:'input',
                    name:'checkOut',
                    message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
                }])
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){ // In case of checkout Yes
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    

                    }
                    else{ // Invalid checkout option
                        console.log(chalk.redBright('Invalid checkout option.'))
            
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of checkout No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
                
                } 

            } // End inner-while-loop

        } // Ending choose sub-options like weight one or two or three kg 

        else if (sub_opt.sub_option == 3){ // starting choose sub-options like weight one or two or three kg 
            let disc_1_offer = 'Get 10% discount on purchases above Rs.650'
            console.log(chalk.greenBright(disc_1_offer))
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellowBright('Enter how many dozen of Banana you require (1doz - 4doz):')
            }]) 

            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter how many dozen of Banana you require (1doz - 4doz):')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input

            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let banana_price = 180 * 1
                console.log(chalk.greenBright('Your total amount of 1 dozen banana is:',('Rs.' + banana_price))) // total amount
                if (banana_price > 650){
                    let discount = banana_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of 2 kg 
                let banana_price = 180 * 2
                console.log(chalk.greenBright('Your total amount of 2 dozen banana is:',('Rs.' + banana_price))) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of 3 kg 
                let banana_price = 180 * 3
                console.log(chalk.greenBright('Your total amount of 3 dozen banana is:',('Rs.' + banana_price))) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of 3 kg 
                let banana_price = 180 * 4
                console.log(chalk.greenBright('Your total amount of 4 dozen banana is:',('Rs.' + banana_price))) // total amount
                if (banana_price > 600){
                    let discount = banana_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (banana_price - discount))))
                }else{
                    
                }
    
            }
            else{
                console.log(chalk.redBright('Invalid choice'))

                let permit = await inquirer.prompt([{ // Permission required for shopping continue
                    type:'input',
                    name:'permitt',
                    message:chalk.yellowBright('Do you want to contiune shopping:Y/N?')
                }])
                if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
                    continue
                }
                else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
                        
                    break 
                }
                
            } 
            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    

                    }
                    else{ // Invalid checkout option
                        console.log(chalk.redBright('Invalid checkout option.'))
        
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of checkout No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
                
                } 

            } // End inner-while-loop   
        } // closing choose sub-options like weight one or two or three kg 

        else { // strating choose invalid sub-options
            console.log(chalk.redBright('Invalid Entry'))
        } // closing choose invalid sub-options

    } // closing choose main-sub options like fruits or vegetables

    else if (option.chosenoption == 2){ // starting choose main-sub options like apple or banana or mangos
        console.log(chalk.greenBright('There are following items in your selected vegetable category'))
        console.log(chalk.magentaBright("1. Carrot \tRs.100 per kg") +chalk.yellowBright("\n2. Lady-finger \tRs.150 per kg") +chalk.blueBright("\n3. Potato \tRs.180 per kg"))
        let sub_opt = await inquirer.prompt([{ // user entry for main-sub options
            type:'input',
            name:'sub_option',
            message:chalk.yellowBright('Enter the number of your selected vegetable (1 - 3):')
        }])

        while(true){ // Starting while-loop in case of empty input
            if (sub_opt.sub_option.trim() == ''){
                console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                sub_opt = await inquirer.prompt([{ // Ask for input again
                    type:'input',
                    name:'sub_option',
                    message:chalk.yellowBright('Enter the number of your selected vegetable (1 - 3):')
                }])
            }
            else{// Break the loop if the input is not empty 
                break
            }
        } // Ending while-loop in case of empty input

        if (sub_opt.sub_option == 1){ // Starting choose sub-options like weight one or two or three kg 
            let disc_2_offer = 'Get 10% discount on purchases above Rs.300'
            console.log(chalk.greenBright(disc_2_offer))
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellowBright('Enter total weight of Carrot you required in kgs (1kg - 4kg):')
            }])

            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter total weight of Carrot you required in kgs (1kg - 4kg):')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input

            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let carr_price = 100 * 1
                console.log(chalk.greenBright('Your total amount of 1 kg carrot is:',('Rs.' + carr_price))) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let carr_price = 100 * 2
                console.log(chalk.greenBright('Your total amount of 2 kg carrot is:',('Rs.' + carr_price))) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let carr_price = 100 * 3
                console.log(chalk.greenBright('Your total amount of 3 kg carrot is:',('Rs.' + carr_price))) // total amount
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price 
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let carr_price = 100 * 4 
                console.log(chalk.greenBright('Your total amount of 4 kg carrot is:',('Rs.' + carr_price))) // total amount 
                if (carr_price > 300){
                    let discount = carr_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (carr_price - discount))))
                }else{
                    
                }
            }
            else{
                console.log(chalk.redBright('Invalid choice'))

                let permit = await inquirer.prompt([{ // Permission required for shopping continue
                    type:'input',
                    name:'permitt',
                    message:chalk.yellowBright('Do you want to contiune shopping:Y/N?')
                }])
                if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
                    continue
                }
                else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
                        
                    break 
                }
                
            }

            while(true){ // Start inner-while-loop
                let check_opt = await inquirer.prompt([{ // Checkout options
                    type:'input',
                    name:'checkOut',
                    message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
                }])
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    
                    }
                    else{
                        console.log(chalk.redBright('Invalid checkout option.')) // invalid checkout option
                
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of checkout No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
                
                } 

            } // Close inner-while-loop
            
        } // Closing choose sub-options like weight one or two or three kg

        else if (sub_opt.sub_option == 2){ // Start choose sub-options like weight one or two or three kg 
            let disc_3_offer = 'Get 10% discount on purchases above Rs.450'
            console.log(chalk.greenBright(disc_3_offer))
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellow('Enter total weight of Lady-finger you required in kgs (1kg - 4kg):')
            }])

            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter total weight of Lady-finger you required in kgs (1kg - 4kg):')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input

            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let ladf_price = 150 * 1
                console.log(chalk.greenBright('Your total amount of 1 kg lady-finger is:',('Rs.' + ladf_price))) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let ladf_price = 150 * 2
                console.log(chalk.greenBright('Your total amount of 2 kg lady-finger is:',('Rs.' + ladf_price))) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let ladf_price = 150 * 3
                console.log(chalk.greenBright('Your total amount of 3 kg lady-finger is:',('Rs.' + ladf_price))) // total amount
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price 
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after discount, your actual amount is',('Rs.' + (ladf_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let ladf_price = 150 * 4 
                console.log(chalk.greenBright('Your total amount of 4 kg lady-finger is:',('Rs.' + ladf_price))) // total amount 
                if (ladf_price > 450){
                    let discount = ladf_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (ladf_price - discount))))
                }else{
                    
                }
            }
            else{
                console.log(chalk.redBright('Invalid choice'))

                let permit = await inquirer.prompt([{ // Permission required for shopping continue
                    type:'input',
                    name:'permitt',
                    message:chalk.yellowBright('Do you want to contiune shopping:Y/N?')
                }])
                if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
                    continue
                }
                else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
                        
                    break 
                }
                
            }
            
            while(true){ // Start inner-while-loop
                let check_opt = await inquirer.prompt([{ // Checkout options
                    type:'input',
                    name:'checkOut',
                    message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
                }])
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                        
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    
                    }
                    else{
                        console.log(chalk.redBright('Invalid checkout option.')) // Invalid checkout opetion
                
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of checkout No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
                
                }

            } // Close inner-while-loop

        } // Close choose sub-options like weight one or two or three kg 

        else if (sub_opt.sub_option == 3){ // Start choose sub-options like weight one or two or three kg 
            let disc_4_offer = 'Get 10% discount on purchases above Rs.500'
            console.log(chalk.greenBright(disc_4_offer))
            let tot_weight = await inquirer.prompt([{
                type:'input',
                name:'weight',
                message:chalk.yellowBright('Enter total weight of Potato you required in kgs (1kg - 4kg):')
            }])

            while(true){ // Starting while-loop in case of empty input
                if (tot_weight.weight.trim() == ''){
                    console.log(chalk.redBright('Please enter a valid choice')) // Display error for empty input
                    tot_weight = await inquirer.prompt([{ // Ask for input again
                        type:'input',
                        name:'weight',
                        message:chalk.yellowBright('Enter total weight of Potato you required in kgs (1kg - 4kg):')
                    }])
                }
                else{// Break the loop if the input is not empty 
                    break
                }
            } // Ending while-loop in case of empty input

            if (tot_weight.weight == 1){ // weight in case of 1 kg 
                let pot_price = 180 * 1
                console.log(chalk.greenBright('Your total amount of 1 kg potato is:',('Rs.' + pot_price))) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 2){ // weight in case of two kg
                let pot_price = 180 * 2
                console.log(chalk.greenBright('Your total amount of 2 kg potato is:',('Rs.' + pot_price))) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 3){ // weight in case of three kg
                let pot_price = 180 * 3
                console.log(chalk.greenBright('Your total amount of 3 kg potato is:',('Rs.' + pot_price))) // total amount
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price 
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount))))
                }else{
                    
                }
            }else if (tot_weight.weight == 4){ // weight in case of four kg
                let pot_price = 180 * 4 
                console.log(chalk.greenBright('Your total amount of 4 kg potato is:',('Rs.' + pot_price))) // total amount 
                if (pot_price > 500){
                    let discount = pot_price / 10 // discount price
                    console.log(chalk.magentaBright('You are given a discount of',('Rs.' + discount)))
                    console.log(chalk.magentaBright('So after 10% discount, your actual amount is',('Rs.' + (pot_price - discount))))
                }else{
                    
                }
            }
            else{
                console.log(chalk.redBright('Invalid choice'))

                let permit = await inquirer.prompt([{ // Permission required for shopping continue
                    type:'input',
                    name:'permitt',
                    message:chalk.yellow('Do you want to contiune shopping:Y/N?')
                }])
                if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
                    continue
                }
                else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
                        
                    break 
                }
                
            }

            let check_opt = await inquirer.prompt([{ // Checkout options
                type:'input',
                name:'checkOut',
                message:chalk.yellowBright('Would you like to proceed checkout:Y/N?')
            }])
            while(true){ // Start inner-while-loop
                if (check_opt.checkOut.toUpperCase() == 'Y' || check_opt.checkOut.toLowerCase() == 'y'){
                    console.log(chalk.greenBright('We have following checkout options:'))
                    console.log(chalk.magentaBright("1. Credit Card") + chalk.blackBright("\n2. Debit Card") + chalk.blueBright("\n3. Net Banking") + chalk.greenBright("\n4. Cash On Delivery") + chalk.yellowBright("\n5. PayPal") + chalk.redBright("\n6. Cancel "))
                    let choose_opt = await inquirer.prompt([{
                        type:'input',
                        name:'choose_check',
                        message:chalk.yellowBright('Please choose a preferred payment method from above and type their number here (1 - 6):')
                    }])
                    if (choose_opt.choose_check == 1){ // Credit card checkout option
                        console.log(chalk.greenBright(`You've selected Credit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Credit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 2){ // Debit card checkout option
                        console.log(chalk.greenBright(`You've selected Debit Card as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using your Debit Card.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 3){ // Net banking checkout option
                        console.log(chalk.greenBright(`You've selected Net Banking as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using Net Banking.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 4){ // Cash on delivery checkout option
                        console.log(chalk.greenBright(`You've selected Cash On Delivery as your preferred payment method.`));
                        console.log(chalk.greenBright(`You've selected Cash On Delivery. Payment will be collected upon delivery.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 5){ // Paypal checkout option
                        console.log(chalk.greenBright(`You've selected PayPal as your preferred payment method.`));
                        console.log(chalk.greenBright(`Please proceed to pay using PayPal.`))
                        console.log(chalk.greenBright('Thanks for proceeding your payments!!'))
                        break

                    }
                    else if (choose_opt.choose_check == 6){ // Checkout cancel option
                        console.log(chalk.redBright('Checkout canceled. Thank you!'))
                        break
                    
                    }
                    else{
                        console.log(chalk.redBright('Invalid checkout option.')) // Invalid checkout option
                    
                    }

                }
                else if (check_opt.checkOut.toUpperCase() == 'N' || check_opt.checkOut.toLowerCase() == 'n'){ // In case of checkout No
                    break

                }
                else{ // In case of else neither Yes nor No
                    console.log(chalk.redBright("Enter a valid text either 'Y' or 'N':"))
                
                }

            } // Close inner-while-loop

        } // Close choose sub-options like weight one or two or three kg 

        else{ // Start Invalid entry
            console.log(chalk.redBright('Invalid Entry'))
        } // close invalid entry

    } // closing choose main-sub options like apple or banana or mangos

    else{ // starting choose invalid entry
        console.log(chalk.redBright('Invalid Entry'))
    }  // starting choose invalid entry

    let inner_flag = false // Inner flag approach
    while(true){ // Start while loop for continue shopping
        let permit = await inquirer.prompt([{ // Permission required for shopping continue
            type:'input',
            name:'permitt',
            message:chalk.yellowBright('Do you want to contiune shopping:Y/N?')
        }])
        if (permit.permitt.toLowerCase() == 'y' || permit.permitt.toUpperCase() == 'Y'){ // In case of Yes
            break
        }
        else if (permit.permitt.toLowerCase()  == 'n' || permit.permitt.toUpperCase() == 'N') { // In case of No
            inner_flag = true
            break 
        }
        else{
            console.log(chalk.redBright("Please enter a valid text either 'Y' or 'N':")) // Invalid text entered
        }

    } //Close while loop for continue shopping
    if(inner_flag){ // Apply inner-flag option
        break
    }
    else{

    }

} // Ending Outer-while-loop//
let endMessage = '+++++++++++++++ Thanks For Shopping Here! +++++++++++++++\n'
console.log(chalk.greenBright(endMessage))