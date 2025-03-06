#include <iostream>
using namespace std;

// Base Logger class 
class Logger {
public:
    virtual void log() {
        cout << "Log " << endl;
    }
};

// Derived logger classes
class DatabaseLogger : public Logger {
public:
    void log( ) override {
        cout << "Log written to Database "  << endl;
    }
};

class FileLogger : public Logger {
public:
    void log() override {
        cout << "Log written to File "  << endl;
    }
};

class CloudLogger : public Logger {
public:
    void log() override {
        cout << "Log written to Cloud " << endl;
    }
};


int main() {
    DatabaseLogger dbLogger;
    FileLogger fileLogger;
    CloudLogger cloudLogger;

    dbLogger.log();
    fileLogger.log();
    cloudLogger.log();

    return 0;
}
