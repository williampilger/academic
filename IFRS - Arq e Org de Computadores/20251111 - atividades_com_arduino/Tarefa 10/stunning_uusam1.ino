int LED = 11;
int SENSOR = 2;

void setup() {
	pinMode(LED, OUTPUT);
	pinMode(SENSOR, INPUT);
  	digitalWrite(LED, LOW);
}

void loop () {
  
  digitalWrite(LED, digitalRead(SENSOR));
  
}