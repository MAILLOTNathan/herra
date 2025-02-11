#ifndef PLACE_HPP_
#define PLACE_HPP_

#include "etibjson.hpp"

namespace Model {
    class Place : public ETIB::JsonSerializable {
        public:
            Place();
            Place(const std::string& name, const std::pair<double, double>& coordinates);

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            std::string name;
            std::pair<double, double> coordinates;
    };
}


#endif /* PLACE_HPP_ */