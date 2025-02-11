/*
** EPITECH PROJECT, 2025
** hAPIthon
** File description:
** main
*/

#include <iostream>
#include "Server.hpp"
#include "Client.hpp"
#include "Log.hpp"

ETIB::Server *createServerFromArgs(int ac, char **av)
{
    if (ac == 2) {
        if (std::stoi(av[1]) > 0 && std::stoi(av[1]) < 65535)
            return new ETIB::Server("localhost", std::stoi(av[1]));
        if (av[1] == "help") {
            std::cout << "Usage: ./hAPIthon [port]" << std::endl;
            return nullptr;
        }
    }
    return new ETIB::Server();
}

std::string getFileContent(const std::string &filename)
{
    std::ifstream file(filename);
    std::string content;

    if (!file.is_open()) {
        ETIB::Log(ETIB::Log::ERROR, "Failed to open file " + filename);
        return "";
    }
    content = std::string((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
    file.close();
    return content;
}

int main(int ac, char **av)
{
    std::string htmlContent = getFileContent("api.html");
    ETIB::Server *server = createServerFromArgs(ac, av);

    if (!server) {
        ETIB::Log(ETIB::Log::ERROR, "Failed to create server");
        return 84;
    }
    server->get("/", [&](const httplib::Request &req, httplib::Response &res) {
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.status = 200;
        res.set_content(htmlContent, "text/html");
    });
    server->get("/test", [](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_content("Hello World!", "text/plain");
    });
    server->get("/users", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full users listing", "text/plain");
    });
    server->get("/alerts", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full alerts listing", "text/plain");
    });
    server->get("/places", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full places listing", "text/plain");
    });
    server->get("/places/safe", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full safe places listing", "text/plain");
    });
    server->get("/places/unsafe", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full unsafe places listing", "text/plain");
    });
    server->get("/services", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full services listing", "text/plain");
    });
    server->get("/services/medical", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full medical services listing", "text/plain");
    });
    server->get("/services/courses", [&](const httplib::Request &req, httplib::Response &res) {
        res.status = 200;
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
        res.set_content("Full courses services listing", "text/plain");
    });
    server->listen();
    delete server;
    return 0;
}