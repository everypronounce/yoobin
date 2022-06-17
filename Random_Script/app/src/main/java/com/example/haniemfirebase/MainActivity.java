package com.example.haniemfirebase;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    TextView eng_text;
    TextView kor_text;

    String key = Integer.toString(new Random().nextInt(5) + 1);  // DB의 키 (1~5)

    FirebaseDatabase database = FirebaseDatabase.getInstance();
    DatabaseReference myRef = database.getReference(key); // key에 해당하는 DB의 참조 값

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        eng_text = findViewById(R.id.eng_text);
        kor_text = findViewById(R.id.kor_text);

        myRef.addListenerForSingleValueEvent(new ValueEventListener(){
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                Script data = snapshot.getValue(Script.class);
                eng_text.setText(data.getEnglish());
                kor_text.setText(data.getKorean());
            }
            @Override
            public void onCancelled(@NonNull DatabaseError error) { }
        });
    }
}