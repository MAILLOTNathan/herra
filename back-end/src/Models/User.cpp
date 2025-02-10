/*
** EPITECH PROJECT, 2025
** back-end
** File description:
** User
*/

#include "Models/User.hpp"

Models::User::User()
{
    age = 0;
    id = 0;
    name = "";
    email = "";
    password = "";
    friends = {};
}

Models::User::User(const std::string& name, const std::string& email, const std::string& password, unsigned int id, unsigned int age, std::vector<User *> friends)
{
    this->name = name;
    this->email = email;
    this->password = password;
    this->id = id;
    this->age = age;
    this->friends = friends;
}


Models::User::~User()
{
}

std::shared_ptr<ETIB::JsonValue> Models::User::serialize()
{
    auto json = std::make_shared<ETIB::JsonObject>();
    json->addValue("name", std::make_shared<ETIB::JsonString>(name));
    json->addValue("email", std::make_shared<ETIB::JsonString>(email));
    json->addValue("password", std::make_shared<ETIB::JsonString>(password));
    json->addValue("id", std::make_shared<ETIB::JsonNumber>(id));
    json->addValue("age", std::make_shared<ETIB::JsonNumber>(age));
    auto friendsArray = std::make_shared<ETIB::JsonArray>();
    for (auto friend_ : friends) {
        friendsArray->addValue(friend_->serialize());
    }
    json->addValue("friends", friendsArray);
    return json;
}

void Models::User::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    name = json->getObjectValue()["name"]->getStringValue();
    email = json->getObjectValue()["email"]->getStringValue();
    password = json->getObjectValue()["password"]->getStringValue();
    id = json->getObjectValue()["id"]->getNumberValue();
    age = json->getObjectValue()["age"]->getNumberValue();
    auto friendsArray = json->getObjectValue()["friends"]->getArrayValue();
    for (auto friend_ : friendsArray) {
        auto user = new User();
        user->deserialize(friend_);
        friends.push_back(user);
    }
}
