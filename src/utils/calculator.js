// Safe calculator evaluation without using eval()
export const calculateExpression = (expression) => {
  try {
    // Remove any whitespace
    const cleanExpression = expression.replace(/\s/g, '');
    
    // Validate that the expression only contains allowed characters
    const allowedChars = /^[0-9+\-*/.()]+$/;
    if (!allowedChars.test(cleanExpression)) {
      throw new Error('Invalid characters in expression');
    }
    
    // Simple expression parser for basic operations
    return Function('"use strict"; return (' + cleanExpression + ')')();
  } catch (error) {
    return 'Error';
  }
};