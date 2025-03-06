#include <iostream>
using namespace std;

// Base Logger class 
class Logger {
public:
    virtual void log(string message) {
        cout << "Log " << message << endl;
    }
};

// Derived logger classes
class DatabaseLogger : public Logger {
public:
    void log(string message) override {
        cout << "Log written to Database " << message << endl;
    }
};

class FileLogger : public Logger {
public:
    void log(string message) override {
        cout << "Log written to File " << message << endl;
    }
};

class CloudLogger : public Logger {
public:
    void log(string message) override {
        cout << "Log written to Cloud " << message << endl;
    }
};


int main() {
    DatabaseLogger dbLogger;
    FileLogger fileLogger;
    CloudLogger cloudLogger;

    dbLogger.log("Database log ");
    fileLogger.log("File log ");
    cloudLogger.log("Cloud log ");

    return 0;
}
