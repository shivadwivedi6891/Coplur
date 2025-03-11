using System.Diagnostics;

public class Program
{
    public static void Main(string[] args)
    {
        // Example usage
        Customer customer = new Customer
        {
            CustomerId = 1,
            FirstName = "Shiva",
            LastName = "Dwivedi",
            Email = "shivadwivedi6894@.com",
            Type = CustomerType.Gold
        };

        customer.Register();
        customer.ProcessOrder();

        // lead

        Leads lead = new Leads{

            FirstName = "Shiva",
            LastName = "Dwivedi",
            Type = CustomerType.Gold
        };

        lead.Register();
        lead.ProcessOrder();
    }
}



public class Customer {
    public int CustomerId {get;set;}
    public string FirstName {get;set;} ="";
    public string LastName {get;set;}  ="";
    public string Email {get;set;}  ="";
   public CustomerType Type {get;set;}

public void Register(){


    try{
    Console.WriteLine("Customer Registerd");
    SaveCustomer();

    }
    catch(Exception ex){
        Console.WriteLine($"Error in Registering Customer {ex.Message}");
        

    }


}

public virtual bool SaveCustomer(){
    Console.WriteLine("Customer Saved");
    return true;
    
}

public int GetDiscountPercentage(){
    
        return Type switch {
            CustomerType.Bronze => 15,
            CustomerType.Silver => 20,
            CustomerType.Gold => 25,
            CustomerType.Platinum => 15,
            _ => 12,

        };
}

public void ProcessOrder(){

    int discount = GetDiscountPercentage();
    Console.WriteLine($"Processing Order with {discount}");

}



}
public class Leads : Customer
{
public override bool SaveCustomer(){
    Console.WriteLine("Leads Saved");
    return true;

}

public new void ProcessOrder(){
    Console.WriteLine("leads cannot place an order");

}
}


public enum CustomerType {
    Bronze,
    Silver,
    Gold,
    Platinum
}