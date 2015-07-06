module Jekyll
  module OrFilter
    def or(input, value)
      input || value
    end
  end
end

Liquid::Template.register_filter(Jekyll::OrFilter)
