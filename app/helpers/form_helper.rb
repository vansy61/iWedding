module FormHelper
  def file_input_block(form, attribute, preview_class: nil, preview_data: nil)
    tag.div(class: "col-span-6 text-center") do
      form.label(attribute, class: "block text-left text-sm font-medium mb-2") +
      image_tag(
        form.object.public_send(attribute).attached? ? form.object.public_send(attribute) : "noimage",
        class: "block mx-auto object-cover #{preview_class}",
        data: preview_data
      ) +
      form.label(
        attribute,
        class: "mt-3 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      ) do
        concat("Chọn tệp")
        concat(tag.svg(
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke_width: "1.5",
          stroke: "currentColor",
          class: "shrink-0 size-4"
        ) do
          tag.path(stroke_linecap: "round", stroke_linejoin: "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15")
        end)
        concat(form.file_field(attribute, class: "hidden", data: preview_data))
      end
    end
  end
end
