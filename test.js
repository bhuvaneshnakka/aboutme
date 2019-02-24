function LengthConverter(valNum) {
    document.getElementById("outputLBS").innerHTML = valNum * 2.2046226218;
    return valNum * 2.2046226218;
}
QUnit.test("CONVERSION", function(assert) {
    assert.equal(LengthConverter(3), 6.6138678654, "KGS  3 should give LBS as 6.6138678654");
    assert.equal(LengthConverter(2), 4.4092452436, "KGS 2 should give LBS as  4.4092452436");
    assert.equal(LengthConverter(4), 8.8184904872, "KGS 4 should give LBS as 8.8184904872");
    assert.equal(LengthConverter(5), 11.023113109,"KGS 5 should give LBS  as 11.023113109");
    assert.equal(LengthConverter(6), 13.2277357308, "KGS 6 should give  LBS as 13.2277357308");
 });