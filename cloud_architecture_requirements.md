# Portfolio Cloud Architecture Requirements

## Objectif principal
Créer une section "Cloud Architecture" dans un portfolio web, avec une division claire entre :
1. **Technologies qui renforcent les capacités locales (edge computing)**.
2. **Technologies qui utilisent des capacités externes (API, serverless)**.

Chaque catégorie contiendra plusieurs projets pour illustrer les concepts clés, avec des descriptions, démos interactives, et code source.

---

## Catégorie 1 : Capacités Locales
### Projets suggérés :
1. **Analyse d'image via WebAssembly dans le navigateur**
   - Utiliser un modèle léger (MobileNet) pour la vision par ordinateur.
   - Exécution locale dans le navigateur grâce à WebAssembly.
   - But : Réduire la latence et dépendre moins du cloud.

2. **Traitement de données en local via Web Workers**
   - Analyser un fichier CSV directement dans le navigateur.
   - Exploiter les Web Workers pour un multitraitement efficace.
   - But : Montrer la faisabilité de traitement local pour des tâches simples.

---

## Catégorie 2 : Capacités Externes
### Projets suggérés :
1. **Déploiement d'une API serverless avec AWS Lambda ou Google Cloud Functions**
   - Créer une API pour la classification de texte ou la prédiction de séries temporelles.
   - Utiliser des architectures serverless pour scalabilité.

2. **Application multi-services avec des microservices Docker**
   - Plusieurs microservices (authentification, traitement des données) orchestrés avec Kubernetes.
   - But : Illustrer la flexibilité des architectures modulaires.

3. **Pipeline de machine learning inféré via une API REST**
   - Héberger un modèle (NLP, régression) sur FastAPI ou Flask.
   - Exposer ce modèle via une API consommable par d'autres applications.
   - But : Montrer l'intégration cloud-to-local.

---

## Catégorie 3: Edge Computing

Edge computing brings computation and data storage closer to the source of data, reducing latency and bandwidth requirements.  This is particularly useful for applications requiring real-time processing or operating in areas with limited connectivity.

**Benefits:**

* **Reduced Latency:** Processing data closer to the source significantly reduces delays.
* **Improved Bandwidth Efficiency:** Less data needs to be transmitted to the cloud.
* **Enhanced Security:** Sensitive data can be processed locally, reducing the risk of breaches.
* **Offline Functionality:** Applications can continue to function even without a cloud connection.

**Use Cases:**

* **IoT Devices:** Processing data from sensors and actuators on edge devices.
* **Autonomous Vehicles:** Real-time processing of sensor data for navigation and safety.
* **Video Surveillance:** Real-time analysis of video feeds for security purposes.
* **Industrial Automation:** Monitoring and controlling industrial processes in real-time.

**Integration with Cloud Computing:**

Edge computing and cloud computing are often used together in a hybrid architecture.  Edge devices process data locally, while the cloud handles tasks requiring more processing power or storage.  This combination leverages the strengths of both approaches.  For example, edge devices could perform initial data processing and filtering, sending only relevant data to the cloud for further analysis and storage.


---

## Intégration avec d'autres sections du portfolio
### Section Data Science :
- Inclure des notebooks et repositories GitHub.
- Mettre en avant des projets de machine learning utilisés dans les architectures cloud.

### Section Dashboard :
- Dashboards créés avec Dash, Streamlit ou Tableau.
- Afficher des visualisations interactives connectées aux données des projets cloud.

---

## Technologies recommandées
### Pour le site portfolio :
- **Frontend :** React.js ou Vue.js pour une interface dynamique.
- **Backend :** Flask ou FastAPI pour gérer des APIs.
- **Hébergement :** Netlify, GitHub Pages (frontend), AWS/GCP (backend).

---

## Objectif final
Créer un portfolio clair et interactif, avec des démonstrations et des projets bien documentés, afin de montrer des compétences en cloud computing, data science, et développement web.
