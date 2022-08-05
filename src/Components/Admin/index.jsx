import NewProduct from "./NewProduct";

function Admin(){

    return(
        <div className="admin__container">
            <h1>Admin Dashboard</h1>
           <NewProduct></NewProduct>
        </div>
    );

}

export default Admin;