# Compatibility shim: Ruby 3.2+ removed taint tracking (tainted?/untaint)
# Liquid 4.0.3 still calls these methods, so we stub them out.
if RUBY_VERSION >= "3.2"
  class Object
    def tainted?; false; end
    def untaint; self; end
  end
end
