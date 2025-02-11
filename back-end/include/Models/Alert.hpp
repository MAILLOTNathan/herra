#ifndef ALERT_HPP_
#define ALERT_HPP_

#include "etibjson.hpp"

namespace Model {
    class Alert : public ETIB::JsonSerializable {
        public:
            Alert();
            Alert(int id, const std::string& title, const std::string& description, const std::string& type, const std::string& date, const std::pair<double, double>& coordinates);

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            int id;
            std::string title;
            std::string description;
            std::string type;
            std::string date;
            std::pair<double, double> coordinates;
    };
}

#endif /* !ALERT_HPP_ */