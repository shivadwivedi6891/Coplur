#include<string>
#include <iostream>

using namespace std;


class Student {

    public :

    string Name;
    int RollNumber;
    string Course;
    int Age;

    Student(string Name,int RollNumber,string Course,int Age){

       this-> Name=Name;
       this-> RollNumber=RollNumber;
       this-> Course=Course;
       this-> Age=Age;

    }
     

    void DisplayStudentDetails(){

        cout<<"Name :"<<Name<<endl;
        cout<<"Roll Number :"<<RollNumber<<endl;
        cout<<"Course :"<<Course<<endl;
        cout<<"Age :"<<Age<<endl;


    }

};

int main()
{
   Student student1("Shiva",100,"Computer Science",20);
   Student student2("Akhil",101,"Computer Science",18);
   Student student3("Shivam",102,"Computer Science",18);

   student1.DisplayStudentDetails();
   cout<<endl;
   student2.DisplayStudentDetails();
   cout<<endl;
   student3.DisplayStudentDetails();

}
