import { Optional } from 'sequelize';
import Card, { CardCreationAttributes } from './card.model';

class CardService {
  getAllCards(): Promise<Card[]> {
    return Card.findAll();
  }

  getCardById(id: string): Promise<Card | null> {
    return Card.findByPk(id);
  }

  createCard(card: CardCreationAttributes): Promise<Card> {
    return Card.create(card);
  }

  updateCard(id: string, updatedCard: Optional<Card, 'id'>): Promise<Card | null> {
    return Card.findByPk(id).then(card => {
      if (card) {
        return card.update(updatedCard);
      }
      return null;
    });
  }

  deleteCard(id: string): Promise<number> {
    return Card.destroy({
      where: { id },
    });
  }
}

export default CardService;