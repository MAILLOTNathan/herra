#include "Models/Place.hpp"

Model::Place::Place()
{
    this->name = "";
    this->coordinates = std::make_pair(0, 0);
}

Model::Place::Place(const std::string& name, const std::pair<double, double>& coordinates)
{
    this->name = name;
    this->coordinates = coordinates;
}

std::shared_ptr<ETIB::JsonValue> Model::Place::serialize()
{
    auto json = std::make_shared<ETIB::JsonObject>();
    auto coordinates = std::make_shared<ETIB::JsonObject>();

    coordinates->addValue("lat", std::make_shared<ETIB::JsonNumber>(this->coordinates.first));
    coordinates->addValue("lon", std::make_shared<ETIB::JsonNumber>(this->coordinates.second));

    json->addValue("name", std::make_shared<ETIB::JsonString>(this->name));
    json->addValue("coordinates", coordinates);
    return json;
}

void Model::Place::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    auto coordinates = json->getObjectValue()["coordinates"]->getObjectValue();

    this->name = json->getObjectValue()["name"]->getStringValue();
    this->coordinates = std::make_pair(coordinates["lat"]->getNumberValue(), coordinates["lon"]->getNumberValue());
}
