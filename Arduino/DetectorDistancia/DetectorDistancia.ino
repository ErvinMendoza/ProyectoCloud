
/* Sensor Ultrasonico HC-SR04 */

int TRIG = 13; // Pin digital 13
int ECHO = 12; // Pin digital 12
int duracion;
int distancia;

void setup() {
  pinMode(TRIG, OUTPUT); // Pin como Salida
  pinMode(ECHO, INPUT);  // Pin como Entrada
  Serial.begin(9600);    // Iniciar comunicación serial
}

void loop() {
  // Establecer tiempo de envio y recepcion - Trigger
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);  // Cambiar a 10 microsegundos para un trigger adecuado
  digitalWrite(TRIG, LOW);
  
  // Obtener respuesta - Eco
  duracion = pulseIn(ECHO, HIGH);
  distancia = duracion / 58.2; // Conversión a centímetros

  // Imprimir datos en el monitor serie
  if (distancia > 0 && distancia < 400) { // Verificar rango válido del sensor
    Serial.print("Distancia: ");
    Serial.print(distancia);
    Serial.println(" cm");
  } else {
    Serial.println("Fuera de rango");
  }

  delay(500); // Pausa para evitar saturación de datos
}
