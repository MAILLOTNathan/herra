#include "Models/UnsafePlace.hpp"

Model::UnsafePlace::UnsafePlace() : Place()
{
    this->risk = "";
    this->alerts = std::vector<Alert *>();
}

Model::UnsafePlace::UnsafePlace(const std::string& name, const std::pair<double, double>& coordinates, const std::string& risk, const std::vector<Alert *>& alerts) : Place(name, coordinates)
{
    this->risk = risk;
    this->alerts = alerts;
}

std::shared_ptr<ETIB::JsonValue> Model::UnsafePlace::serialize()
{
    auto json = std::dynamic_pointer_cast<ETIB::JsonObject>(Place::serialize());
    auto alerts = std::make_shared<ETIB::JsonArray>();

    for (auto alert : this->alerts)
        alerts->addValue(alert->serialize());
    json->addValue("risk", std::make_shared<ETIB::JsonString>(this->risk));
    json->addValue("alerts", alerts);
    return json;
}

void Model::UnsafePlace::deserialize(const std::shared_ptr<ETIB::JsonValue>& json)
{
    auto alerts = json->getObjectValue()["alerts"]->getArrayValue();

    Place::deserialize(json);
    this->risk = json->getObjectValue()["risk"]->getStringValue();
    for (auto alert : alerts)
    {
        auto alertObj = std::dynamic_pointer_cast<ETIB::JsonObject>(alert);
        auto alertModel = new Alert();

        alertModel->deserialize(alertObj);
        this->alerts.push_back(alertModel);
    }
}