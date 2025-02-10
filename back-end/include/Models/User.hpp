/*
** EPITECH PROJECT, 2025
** back-end
** File description:
** User
*/

#ifndef USER_HPP_
#define USER_HPP_

#include "etibjson.hpp"

namespace Models {
    class User : public ETIB::JsonSerializable {
        public:
            User();
            User(const std::string& name, const std::string& email, const std::string& password, unsigned int id, unsigned int age, std::vector<User *> friends = {});

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            std::string name;
            std::string email;
            std::string password;
            unsigned int id;
            unsigned int age;
            std::vector<User *> friends;
    };
}

#endif /* !USER_HPP_ */
