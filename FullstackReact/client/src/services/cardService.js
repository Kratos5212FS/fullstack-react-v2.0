import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCard(cardId) {
  return http.get(`${apiUrl}/cards/${cardId}`);
}

export function editCard(card) {
  const cardId = card._id;
  delete card._id;
  return http.put(`${apiUrl}/cards/${cardId}`, card);
}

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

export function deleteCard (id){
  return http.delete(`${apiUrl}/cards/${id}`);
}

export default {
  createCard,
  getMyCards,
  editCard,
  getCard,
};
