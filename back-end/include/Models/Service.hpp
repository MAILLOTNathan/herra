#ifndef SERVICE_HPP_
#define SERVICE_HPP_

#include "etibjson.hpp"

namespace Model {
    class Service : public ETIB::JsonSerializable {
        public:
            Service();
            Service(int id, const std::string& name, const std::string& description, const std::string& type, const std::pair<double, double>& coordinates, unsigned int pricing, int rating);

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            int id;
            std::string name;
            std::string description;
            std::string type;
            unsigned int pricing;
            int rating;
            std::pair<double, double> coordinates;
    };
}

#endif /* !SERVICE_HPP_ */