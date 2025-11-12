int BUZZER = 11;

void setup() {
	pinMode(BUZZER, OUTPUT);
  	digitalWrite(BUZZER, LOW);
}

void loop () {
  
  tone(BUZZER, 262,200);//DO
  delay(500);
  
  tone(BUZZER, 294,300);//RE
  delay(500);
  
  tone(BUZZER, 330,300);//MI
  delay(500);
  
  tone(BUZZER, 349,300);//FA
  delay(700);
  
  tone(BUZZER, 349,300);//FA
  delay(700);
  
  tone(BUZZER, 349,300);//FA
  delay(700);
  
  tone(BUZZER, 262,200);//DO
  delay(500);
  
  tone(BUZZER, 294,300);//RE
  delay(500);
  
  tone(BUZZER, 262,200);//DO
  delay(500);
  
  tone(BUZZER, 294,300);//RE
  delay(700);
  
  tone(BUZZER, 294,300);//RE
  delay(700);
  
  tone(BUZZER, 294,300);//RE
  delay(700);
  
}