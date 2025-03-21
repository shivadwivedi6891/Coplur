using System;
using System.Collections.Generic;

namespace FoodOrderingSystem
{
    public class FoodItem
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }

        public FoodItem(string name, decimal price, string category)
        {
            Name = name;
            Price = price;
            Category = category;
        }
    }

    public class Menu
    {
        public List<FoodItem> menuItems = new List<FoodItem>();
        public HashSet<string> categories = new HashSet<string>();

        public void AddFoodItem(FoodItem item)
        {
            menuItems.Add(item);
            categories.Add(item.Category);
        }

        public void DisplayMenu()
        {
            if (menuItems.Count == 0)
            {
                Console.WriteLine("No food items available.");
                return;
            }

            foreach (var item in menuItems)
            {
                Console.WriteLine($"Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }
        }

        public HashSet<string> GetCategories()
        {
            return categories;
        }

        public FoodItem GetFoodItem(string name)
{
    var item = menuItems.Find(x => x.Name == name);
    if (item == null)
        throw new InvalidOperationException($"Food item '{name}' not found.");

    return item;
}

    }

    public class Order
    {
        public int OrderId { get; set; }
        public List<FoodItem> Items { get; set; }

        public Order(int orderId, List<FoodItem> items)
        {
            OrderId = orderId;
            Items = items;
        }
    }

    public class OrderManager
    {
        private Dictionary<int, Order> orders = new Dictionary<int, Order>();
        private Queue<int> pendingDeliveries = new Queue<int>();
        private Stack<int> deliveredOrders = new Stack<int>();

        public void PlaceOrder(Order order)
        {
            orders.Add(order.OrderId, order);
            pendingDeliveries.Enqueue(order.OrderId);
        }

        public void DeliverOrder()
        {
            if (pendingDeliveries.Count == 0)
            {
                Console.WriteLine("No pending deliveries.");
                return;
            }

            int orderId = pendingDeliveries.Dequeue();
            deliveredOrders.Push(orderId);

            Console.WriteLine("Order delivered successfully.");
        }

        public void DisplayPendingDeliveries(Menu menu)
        {
            if (pendingDeliveries.Count == 0)
            {
                Console.WriteLine("No pending deliveries.");
                return;
            }

            foreach (var orderId in pendingDeliveries)
            {
                Console.WriteLine($"Order ID: {orderId}");

                foreach (var item in orders[orderId].Items)
                {
                    Console.WriteLine($"Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
                }
            }
        }

        public void DisplayDeliveredOrders(Menu menu)
        {
            if (deliveredOrders.Count == 0)
            {
                Console.WriteLine("No delivered orders.");
                return;
            }

            foreach (var orderId in deliveredOrders)
            {
                Console.WriteLine($"Order ID: {orderId}");

                foreach (var item in orders[orderId].Items)
                {
                    Console.WriteLine($"Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
                }
            }
        }
    }

    public class Program
    {
        static void Main(string[] args)
        {
            Menu menu = new Menu();
            OrderManager orderManager = new OrderManager();
            int orderId = 1;

            while (true)
            {
                Console.WriteLine("1. Add Food Item");
                Console.WriteLine("2. Show Menu");
                Console.WriteLine("3. Place Order");
                Console.WriteLine("4. Deliver Order");
                Console.WriteLine("5. Show Pending Deliveries");
                Console.WriteLine("6. Show Delivered Orders");
                Console.WriteLine("7. Show Food Categories");
                Console.WriteLine("8. Exit");

                Console.Write("Choose an option: ");
                int option = Convert.ToInt32(Console.ReadLine());

                switch (option)
                {
                    case 1:
                        AddFoodItem(menu);
                        break;
                    case 2:
                        menu.DisplayMenu();
                        break;
                    case 3:
                        PlaceOrder(orderManager, menu, ref orderId);
                        break;
                    case 4:
                        orderManager.DeliverOrder();
                        break;
                    case 5:
                        orderManager.DisplayPendingDeliveries(menu);
                        break;
                    case 6:
                        orderManager.DisplayDeliveredOrders(menu);
                        break;
                    case 7:
                        DisplayFoodCategories(menu);
                        break;
                    case 8:
                        return;
                    default:
                        Console.WriteLine("Invalid option. Please choose again.");
                        break;
                }
            }
        }

        static void AddFoodItem(Menu menu)
        {
            Console.Write("Enter food item name: ");
            string name = Console.ReadLine()??string.Empty;
            Console.Write("Enter food item price: ");
            decimal price = Convert.ToDecimal(Console.ReadLine());
            Console.Write("Enter food item category: ");
            string category = Console.ReadLine()??string.Empty;

            menu.AddFoodItem(new FoodItem(name, price, category));

            Console.WriteLine("Food item added successfully.");
        }

        static void PlaceOrder(OrderManager orderManager, Menu menu, ref int orderId)
        {
            Console.Write("Enter number of items to order: ");
            int numItems = Convert.ToInt32(Console.ReadLine());

            List<FoodItem> orderItems = new List<FoodItem>();

            for (int i = 0; i < numItems; i++)
            {
                Console.Write($"Enter name of item {i + 1}: ");
                string itemName = Console.ReadLine()??string.Empty;

                var item = menu.GetFoodItem(itemName);

                if (item != null)
                {
                    orderItems.Add(item);
                }
                else
                {
                    Console.WriteLine("Item not found. Please try again.");
                    i--;
                }
            }

            orderManager.PlaceOrder(new Order(orderId, orderItems));

            Console.WriteLine("Order placed successfully.");
            orderId++;
        }

        static void DisplayFoodCategories(Menu menu)
        {
            var categories = menu.GetCategories();

            if (categories.Count == 0)
            {
                Console.WriteLine("No food categories available.");
                return;
            }

            foreach (var category in categories)
            {
                Console.WriteLine(category);
            }
        }
    }
}
