import UserData from "./userData"

export default function Header(){

    return(
        <header>
            <h1>My shop</h1>
            <UserData/> 
        </header>
    )

    //userdata below the header is imported to the header function below "My shop" heading through separate file creation
}