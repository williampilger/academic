int BUZZER = 11;

void setup() {
	pinMode(BUZZER, OUTPUT);
  	digitalWrite(BUZZER, LOW);
}

void loop () {
  
  tone(BUZZER, 262,200);//DO
  delay(200);
  
  tone(BUZZER, 294,300);//RE
  delay(200);
  
  tone(BUZZER, 330,300);//MI
  delay(200);
  
  tone(BUZZER, 349,300);//FA
  delay(300);
  
  tone(BUZZER, 349,300);//FA
  delay(300);
  
  tone(BUZZER, 349,300);//FA
  delay(300);
  
  tone(BUZZER, 262,200);//DO
  delay(200);
  
  tone(BUZZER, 294,300);//RE
  delay(200);
  
  tone(BUZZER, 262,200);//DO
  delay(200);
  
  tone(BUZZER, 294,300);//RE
  delay(300);
  
  tone(BUZZER, 294,300);//RE
  delay(300);
  
  tone(BUZZER, 294,300);//RE
  delay(300);
  
}