JUnit5 test classes and methods should have default package visibility
 
Code smell
 
Info
java:S5786
 
JUnit5 is more tolerant regarding the visibilities of Test classes than JUnit4, which required everything to be public.
In this context, JUnit5 test classes can have any visibility but private, however, it is recommended to use the default package visibility, which improves readability of code.
Noncompliant Code Example
import org.junit.jupiter.api.Test;

public class MyClassTest { // Noncompliant - modifier can be removed
  @Test
  protected void test() { // Noncompliant - modifier can be removed
    // ...
  }
}
Compliant Solution
import org.junit.jupiter.api.Test;

class MyClassTest {
  @Test
  void test() {
    // ...
  }
}
Exceptions
This rule does not raise an issue about private visibility, because private test methods and classes are systematically ignored by JUnit5, without a proper warning. It’s not a Code Smell but a Bug handled by the rule {rule:java:S5810} .
See
JUnit 5 Test Classes and Methods
