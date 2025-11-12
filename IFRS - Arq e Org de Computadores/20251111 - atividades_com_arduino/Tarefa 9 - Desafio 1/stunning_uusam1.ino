int LED = 11;
int POT = A0;

void setup() {
	pinMode(LED, OUTPUT);
	pinMode(POT, INPUT);
  	digitalWrite(LED, LOW);
}

void loop () {
  
  int lum = map(analogRead(POT), 0, 1023,0,255);
  
  lum = lum - 127;
  if(lum > 0) lum *= -1;
  lum *= 2;
  lum += 255;
  
  analogWrite(LED, lum);
}