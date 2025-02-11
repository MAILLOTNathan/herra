#include "Models/SafePlace.hpp"

Model::SafePlace::SafePlace() : Place()
{
    this->address = "";
    this->phone = "";
    this->type = "";
}

Model::SafePlace::SafePlace(const std::string& name, const std::pair<double, double>& coordinates, const std::string& address, const std::string& phone, const std::string& type) : Place(name, coordinates)
{
    this->address = address;
    this->phone = phone;
    this->type = type;
}

std::shared_ptr<ETIB::JsonValue> Model::SafePlace::serialize()
{
    auto json = std::dynamic_pointer_cast<ETIB::JsonObject>(Place::serialize());

    json->addValue("address", std::make_shared<ETIB::JsonString>(this->address));
    json->addValue("phone", std::make_shared<ETIB::JsonString>(this->phone));
    json->addValue("type", std::make_shared<ETIB::JsonString>(this->type));
    return json;
}

void Model::SafePlace::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    Place::deserialize(json);

    this->address = json->getObjectValue()["address"]->getStringValue();
    this->phone = json->getObjectValue()["phone"]->getStringValue();
    this->type = json->getObjectValue()["type"]->getStringValue();
}
