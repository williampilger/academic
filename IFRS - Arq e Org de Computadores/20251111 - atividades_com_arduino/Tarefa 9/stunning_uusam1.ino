int LED = 11;
int POT = A0;

void setup() {
	pinMode(LED, OUTPUT);
	pinMode(POT, INPUT);
  	digitalWrite(LED, LOW);
}

void loop () {
  
  int lum = map(analogRead(POT), 0, 1023,0,255);
  analogWrite(LED, lum);
  
}