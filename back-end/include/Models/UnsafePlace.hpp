#ifndef UNSAFEPLACE_HPP_
#define UNSAFEPLACE_HPP_

#include "Place.hpp"
#include "Alert.hpp"

namespace Model {
    class UnsafePlace : public Place {
        public:
            UnsafePlace();
            UnsafePlace(const std::string& name, const std::pair<double, double>& coordinates, const std::string& risk, const std::vector<Alert *>& alerts);

            std::shared_ptr<ETIB::JsonValue> serialize() override;

            void deserialize(const std::shared_ptr<ETIB::JsonValue>& json) override;

            std::string risk;
            std::vector<Alert *> alerts;
    };
}

#endif /* UNSAFEPLACE_HPP_ */