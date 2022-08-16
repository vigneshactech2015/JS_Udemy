var billamount=275;

var condition=billamount>=50&&billamount<=300?(0.15*billamount):(0.20*billamount);



console.log(`Bill Amount is ${billamount} Tip is ${condition}  Total amount is ${billamount+condition}`);