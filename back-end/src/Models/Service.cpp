#include "Models/Service.hpp"

Model::Service::Service()
{
    this->id = 0;
    this->name = "";
    this->description = "";
    this->type = "";
    this->pricing = 0;
    this->rating = 0;
    this->coordinates = std::make_pair(0, 0);
}

Model::Service::Service(int id, const std::string& name, const std::string& description, const std::string& type, const std::pair<double, double>& coordinates, unsigned int pricing, int rating)
{
    this->id = id;
    this->name = name;
    this->description = description;
    this->type = type;
    this->pricing = pricing;
    this->rating = rating;
    this->coordinates = coordinates;
}

std::shared_ptr<ETIB::JsonValue> Model::Service::serialize()
{
    auto json = std::make_shared<ETIB::JsonObject>();
    auto coordinates = std::make_shared<ETIB::JsonObject>();

    coordinates->addValue("lat", std::make_shared<ETIB::JsonNumber>(this->coordinates.first));
    coordinates->addValue("lon", std::make_shared<ETIB::JsonNumber>(this->coordinates.second));

    json->addValue("id", std::make_shared<ETIB::JsonNumber>(this->id));
    json->addValue("name", std::make_shared<ETIB::JsonString>(this->name));
    json->addValue("description", std::make_shared<ETIB::JsonString>(this->description));
    json->addValue("type", std::make_shared<ETIB::JsonString>(this->type));
    json->addValue("pricing", std::make_shared<ETIB::JsonNumber>(this->pricing));
    json->addValue("rating", std::make_shared<ETIB::JsonNumber>(this->rating));
    json->addValue("coordinates", coordinates);
    return json;
}

void Model::Service::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    auto coordinates = json->getObjectValue()["coordinates"]->getObjectValue();

    this->id = json->getObjectValue()["id"]->getNumberValue();
    this->name = json->getObjectValue()["name"]->getStringValue();
    this->description = json->getObjectValue()["description"]->getStringValue();
    this->type = json->getObjectValue()["type"]->getStringValue();
    this->pricing = json->getObjectValue()["pricing"]->getNumberValue();
    this->rating = json->getObjectValue()["rating"]->getNumberValue();
    this->coordinates = std::make_pair(coordinates["lat"]->getNumberValue(), coordinates["lon"]->getNumberValue());
}
