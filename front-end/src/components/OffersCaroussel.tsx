import { Carousel, List} from "flowbite-react";

const offers: any[] = [
    {
        title: "Standard 6,99€/mois",
        advantages: [
            "Reconnaissance vocale",
            "Carte interactive",
            "Notifications d'urgence",
            "1 Contact d'urgence",
        ],
        premium: "1 mois offert",
        conditions: [
            "Engagement minimum 6 mois",
            "1,99€ pour toute personne supplémentaire",
        ],
        color: "primary"
    },
    {
        title: "Standard 69,90€/an",
        advantages: [
            "Reconnaissance vocale",
            "Carte interactive",
            "Notifications d'urgence",
            "1 Contact d'urgence",
        ],
        premium: "2 mois offert",
        conditions: [
            "1,99€ pour toute personne supplémentaire",
        ],
        color: "primary"
    },
    {
        title: "Famille 11,99€/mois",
        advantages: [
            "Reconnaissance vocale",
            "Carte interactive",
            "Notifications d'urgence",
            "Contacts d'urgence (1 par personne)",
            "Envoi de newsletters",
            "Service d'appel 24h/24h"
        ],
        premium: "1 mois offert",
        conditions: [
            "Engagement minimum 6 mois",
            "1,99€ pour toute personne supplémentaire",
        ],
        color: "accent"
    },
    {
        title: "Famille 119,90€/an",
        advantages: [
            "Reconnaissance vocale",
            "Carte interactive",
            "Notifications d'urgence",
            "Contacts d'urgence (1 par personne)",
            "Envoi de newsletters",
            "Service d'appel 24h/24h"
        ],
        premium: "2 mois offert",
        conditions: [
            "1,99€ pour toute personne supplémentaire",
        ],
        color: "accent"
    },

]

const MyCard: React.FC<{ title: string, advantages: string[], premium: string, conditions: string[], color: string }> = ({ title, advantages, premium, conditions, color }) => {
    return (
        <div className="flex flex-col justify-center text-center h-fit border-accent bg-white w-fit rounded-3xl mx-auto">
            <span className="text-3xl text-primary border-accent my-8">
                {title}
            </span>
            <div className={"text-left justify-center mx-auto p-8 rounded-3xl bg-" + color}>
                <List className="mb-8 text-white text-sm">
                    {advantages.map((advantage: string) => (
                        <List.Item key={advantage}>
                            {advantage}
                        </List.Item>
                    ))}
                    <List.Item className="text-yellow-300">
                        {premium}
                    </List.Item>
                </List>
                <span className="text-white italic text-xs">
                    {conditions.map((condition: string) => (
                        <p>
                            {"* " + condition}
                        </p>
                    ))}
                </span>
            </div>
        </div>
    )

}

export default function OffersCaroussel() {
  return (
    <div className="">
      <Carousel className="sm:w-[40%] p-16 mx-auto">
        {offers.map((offer: any) => (
            <MyCard
                title={offer.title}
                advantages={offer.advantages}
                conditions={offer.conditions}
                premium={offer.premium}
                color={offer.color} />
        ))}
      </Carousel>
    </div>
  );
}
