import React, { useState } from "react";
import { Grid, Typography, Alert ,TextField} from "@mui/material";
import CustomButton from "../../Components/Button/CustomButton";
import Card from "../../Components/Card/CardSimple";
import axios from "axios";

const AddClient = () => {
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    fax: "",
    taxIdentificationNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${apiBaseURL}/api/clients`,
        {
          name: client.name,
          email: client.email,
          phone: client.phone,
          address: client.address,
          fax: client.fax || null, // fax optionnel
          taxIdentificationNumber: client.taxIdentificationNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Client ajouté avec succès !");
        setClient({
          name: "",
          email: "",
          phone: "",
          address: "",
          fax: "",
          taxIdentificationNumber: "",
        });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          setErrorMessage("Erreur interne du serveur. Veuillez réessayer.");
        } else if (error.response.status === 409) {
          setErrorMessage(
            "Conflit dans un ou plusieurs champs (email, téléphone ou identifiant fiscal)."
          );
        } else {
          setErrorMessage(
            "Une erreur est survenue. Vérifiez les informations fournies."
          );
        }
      } else {
        setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
      }
    }
  };

  return (
    <div>
      <Typography
        variant="h6"
        
      >
        Ajouter Client :
      </Typography>

      <main>
        <Card>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* name */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Nom</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  value={client.name}
                  onChange={handleChange}
                />
              </Grid>

              {/* email */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Email</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                />
              </Grid>

              {/* phone */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Téléphone</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  name="phone"
                  type="tel"
                  value={client.phone}
                  onChange={handleChange}
                />
              </Grid>

              {/* address */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Adresse</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  name="address"
                  value={client.address}
                  onChange={handleChange}
                />
              </Grid>

              {/* fax */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Fax (optionnel)</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="fax"
                  value={client.fax}
                  onChange={handleChange}
                />
              </Grid>

              {/* taxIdentificationNumber */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">Identifiant Fiscal</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  name="taxIdentificationNumber"
                  value={client.taxIdentificationNumber}
                  onChange={handleChange}
                />
              </Grid>

              {/* Messages d'erreur ou de succès */}
              {errorMessage && (
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}
              {successMessage && (
                <Grid item xs={12}>
                  <Alert severity="success">{successMessage}</Alert>
                </Grid>
              )}

              {/* Bouton d'ajout Client */}
              <Grid item xs={12} style={styles.buttonContainer}>
                <CustomButton text="Ajouter Client" type="submit" />
              </Grid>
            </Grid>
          </form>
        </Card>
      </main>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
};

export default AddClient;
