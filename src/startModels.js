
const nombres = [
    "ABRANTES CECILIA",
    "ALTAMIRANO MARIA JOSE",
    "AMOROSO SOFIA",
    "ANGEL ELENA",
    "ARGUELLO JIMENA",
    "ARZAMENDIA MEDINA ROSA NATHALI",
    "BACHELLERIE MARIA FLORENCIA",
    "BARALDO CAMILA",
    "BONALDO MARIA PAULA",
    "BOUZADA MAGDALENA",
    "BRAVO VIRGINIA",
    "BRIOZZO LAURA",
    "BUFFAGNA CARLA",
    "BUSTAMANTE BEATRIZ ELIZABET",
    "BUSTAMANTE ROCIO SOLEDAD",
    "CRIVELLI LAURA",
    "CRUZ FLORENCIA",
    "D ORAZIO MARIANA",
    "DE LA IGLESIA MA LAURA",
    "DEMICHELLI GABRIELA",
    "DERKACZ SOLEDAD",
    "DIAZ RITA MARIA",
    "DOMINGUEZ SOLEDAD",
    "DUMAS VIRGINIA",
    "DURANTE FEDERICO",
    "ETECHEMAITE ANA",
    "FABBRIBETHANCOURT FLORENCIA",
    "FERNANDEZ MARIANA",
    "FERNANDEZ MARTINEZ CAROLINA",
    "FERRANTE CHRISTIAN LUIS",
    "GOMEZ FLORENCIA AYELEN",
    "GONZALEZ BETHENCOURT DOUGLAS",
    "GONZALEZ JENNIFER MARIA",
    "GRIOLLI ANDREA",
    "GUGLIELMINO MARIA BELEN",
    "GUIOT MA VICTORIA",
    "GUTIERREZ VANESA",
    "HERNANDEZ YESICA GISELA",
    "IBARRA VIVIANA",
    "INSINGER ADRIANA DEBORA",
    "IRIBAS ROMAINA",
    "IRIGOYEN MARIA BELEN",
    "LAMURA CAMILA ABIGAIL",
    "LASPOUMADERES FERNANDO",
    "LAVALLE MARIA LAURA",
    "LEON MICAELA",
    "LOVRENCO VERONICA",
    "MADERO AGUSTINA",
    "MANSILLA EMILCE",
    "MANSILLA KAREN DENISSE",
    "MANTELLI MIRTA NOEMI",
    "MARIANI DIEGO",
    "MORALES MARCELA",
    "NATALE JUAN",
    "NAUGHTON MARIELA",
    "OJEDA MARIA SOLEDAD",
    "PADRON MARIANA",
    "PARADA JULIETA ROCIO",
    "PAZOS MARIANO",
    "PEREZ ALICIA BELEN",
    "PEREZ LIA",
    "PETRONI VANINA",
    "POLEDO GEORGINA",
    "POWELL CAMILA",
    "POZO MA-A CECILIA",
    "PRIETO VANESA",
    "QUINTANA ROMINA ELISABETH",
    "RAMOS CANDELA",
    "RAU CARMEN MARIELA",
    "REPETTO GONZALO",
    "RIOS MARIA EUGENIA",
    "RIOS MARIA NOEMI",
    "RIZZO PONZANO",
    "RODRIGUEZ DE ANACA VIRGINIA",
    "RODRIGUEZ JOSE",
    "RODRIGUEZ MARIANELLA",
    "ROLDAN DAIANA",
    "ROMANO PINTOS DEBORA GISELE",
    "ROMERO LUIS ALBERTO",
    "RUIZ MARIA EUGENIA",
    "RUSSO MARCELO ADRIAN",
    "SALZANO MARIA DEL PILAR",
    "SANCHEZ CECILIA",
    "SANTA MARIA ASTRID VANINA",
    "SARMIENTO GABRIELA",
    "SERRA LAURA",
    "SERRANO BENITEZ DANIELA FERNANDA",
    "STORK GRACIELA",
    "TAMAME BELEN",
    "TORRES ALEJANDRA ELIZABETH",
    "VALDEZ MAILEN LUCILA",
    "VAZQUEZ DAMARIS",
    "VAZQUEZ LUZ",
    "VELASCO ANALIA VERONICA",
    "VILLODAS VERONICA",
    "VON DER WALL CECILIA",
    "WEBER ROCIO SOLEDAD"
  ];
  const horarios = [
    "08:00", "08:30",
    "09:00", "09:30",
    "10:00", "10:30",
    "11:00", "11:30",
    "12:00", "12:30",
    "13:00", "13:30",
    "14:00", "14:30",
    "15:00", "15:30",
    "16:00", "16:30"
  ];

  const startModels = async (conn, user,horario) => {
    try {
      // Sincroniza el modelo con la base de datos (crea la tabla si no existe)
      await conn.sync({ force: true });
      
      // Utiliza bulkCreate para insertar registros en la tabla
      await user.bulkCreate(
        nombres.map(nombre => ({ name: nombre })),
      );
      await horario.bulkCreate(
        horarios.map(hora => ({ hora })),
      );
  
      console.log('Registros creados con éxito');
    } catch (error) {
      console.error('Error al crear registros:', error);
    }
  };
  

  module.exports = startModels;