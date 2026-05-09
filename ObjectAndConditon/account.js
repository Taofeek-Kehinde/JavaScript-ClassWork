const account = {
balace: 500,
is_Blocked: false
}
 
if (account.is_Blocked == true) {
    console.log("Account blocked")
} else if (account.balace < 100){

    console.log("Low balance")
} else {

console.log("OK")
}
