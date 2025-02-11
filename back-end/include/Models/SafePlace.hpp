#ifndef SAFEPLACE_HPP_
#define SAFEPLACE_HPP_

#include "Place.hpp"

namespace Models {
    class SafePlace : public Place {
        public:
            SafePlace();
            SafePlace(const std::string& name, const std::pair<double, double>& coordinates, const std::string& address, const std::string& phone, const std::string& type);

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            std::string address;
            std::string phone;
            std::string type;
    };
}

#endif /* SAFEPLACE_HPP_ */