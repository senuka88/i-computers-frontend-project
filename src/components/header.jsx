
export default function Header(){

    return(
        <header className="w-full h-[100px] bg-accent">
            
            <img src="/logo.png" className="w-[100px]" alt="logo" />
            
            <h1>My shop</h1>
          
        </header>
    )

    //userdata below the header is imported to the header function below "My shop" heading through separate file creation
}