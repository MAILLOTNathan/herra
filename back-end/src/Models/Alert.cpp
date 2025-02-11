#include "Models/Alert.hpp"

Model::Alert::Alert()
{
    coordinates = std::make_pair(0, 0);
    date = "";
    description = "";
    id = 0;
    title = "";
    type = "";
}

Model::Alert::Alert(int id, const std::string& title, const std::string& description, const std::string& type, const std::string& date, const std::pair<double, double>& coordinates)
{
    this->id = id;
    this->title = title;
    this->description = description;
    this->type = type;
    this->date = date;
    this->coordinates = coordinates;
}

std::shared_ptr<ETIB::JsonValue> Model::Alert::serialize()
{
    auto json = std::make_shared<ETIB::JsonObject>();

    json->addValue("id", std::make_shared<ETIB::JsonValue>(id));
    json->addValue("title", std::make_shared<ETIB::JsonValue>(title));
    json->addValue("description", std::make_shared<ETIB::JsonValue>(description));
    json->addValue("type", std::make_shared<ETIB::JsonValue>(type));
    json->addValue("date", std::make_shared<ETIB::JsonValue>(date));
    json->addValue("coordinates", std::make_shared<ETIB::JsonValue>(std::to_string(coordinates.first) + "," + std::to_string(coordinates.second)));
    return json;
}

void Model::Alert::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    auto coords = json->getObjectValue()["coordinates"]->getObjectValue();

    id = json->getObjectValue()["id"]->getNumberValue();
    title = json->getObjectValue()["title"]->getStringValue();
    description = json->getObjectValue()["description"]->getStringValue();
    type = json->getObjectValue()["type"]->getStringValue();
    date = json->getObjectValue()["date"]->getStringValue();
    coordinates = std::make_pair(coords["lon"]->getNumberValue(), coords["lat"]->getNumberValue());
}